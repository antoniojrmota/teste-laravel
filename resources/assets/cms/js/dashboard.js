'use strict';

class Dashboard {
  constructor() {
    this.dateRange();
  }

  dateRange() {
    const $dateRangePicker = $('.daterange');
    if ($dateRangePicker.length) {
      $dateRangePicker.daterangepicker({
        locale: app.trans('daterange'),
        startDate: moment().subtract(7, 'days'),
        endDate: moment(),
      });

      window.vue.period = $dateRangePicker.val();

      $dateRangePicker.on('apply.daterangepicker', function (ev, picker) {
        window.vue.period = `${picker.startDate.format('DD/MM/YYYY')} a ${picker.endDate.format('DD/MM/YYYY')}`;
      });
    }
  }
}

$(function () {
  new Dashboard();
});
console.log(window.vuelidate);
Vue.use(window.vuelidate.default);
const { required } = window.validators;

window.vue = new Vue({
  el: '#dashboard',
  filters: {
    dateFormat(value) {
      return moment(value).format('DD/MM/YYYY');
    }
  },

  data: {
    client: null,
    collection: null,
    collections: [],
    period: null,
    tag: null,
    graphicClientData: [],
    graphicCompareData: [],
    graphicConsumption: [],
    graphicKnobConsumer: [],
    totalConsumer: 0,
    consulted: false,
    collectionPerView: [],
    trafficPerCity: [],
    userEngaged: []
  },
  validations: {
    client: {
      required
    }
  },
  watch: {
    graphicCompareData() {
      this.createGraphicCompareData();
    },
    graphicClientData() {
      this.createGraphicClientData();
    },
    graphicConsumption() {
      this.createGraphicConsumption();
    },
    graphicKnobConsumer() {
      this.createGraphicConsumerKnob();
    },
    client() {
      this.loadCollectionsData();
    }
  },
  mounted() {
    this.loadCollectionsData();
    $.get({
      url: '/api/me',
      headers: {
        Authorization: `Bearer ${$('meta[name=api_token]').attr('content')}`
      }
    }).done(e => {
      if (e.type !== 1) {
        this.consulted = true;
        this.loadTraffic();
        this.loadDataGraphicKnobConsumer();
        this.loadCollections();
        this.loadRankUser();
        this.loadDataGraphicConsumer();
        this.loadDataGraphicCompare();
        this.loadDataGraphicClient();
      }
    });
  },
  methods: {
    submitSearch() {
      this.$v.$touch();
      if (!this.$v.$error) {
        this.consulted = true;
        this.loadTraffic();
        this.loadRankUser();
        this.loadCollections();
        this.loadDataGraphicCompare();
        this.loadDataGraphicClient();
        this.loadDataGraphicConsumer();
        this.loadDataGraphicKnobConsumer();
      }
    },
    loadTraffic() {
      $.get({
        url: '/api/traffic/city',
        data: {
          consumer: this.client,
          collection: this.collection,
          period: this.period
        },
        headers: {
          Authorization: `Bearer ${$('meta[name=api_token]').attr('content')}`
        }
      }).done(e => {
        this.trafficPerCity = e;
      });
    },
    async loadCollectionsData() {
      this.collections = await $.get({
        url: '/api/client/collections',
        data: {
          consumer: this.client,
        },
        headers: {
          Authorization: `Bearer ${$('meta[name=api_token]').attr('content')}`
        }
      });
    },
    loadRankUser() {
      $.get({
        url: '/api/rank/user',
        data: {
          consumer: this.client,
          collection: this.collection,
          period: this.period
        },
        headers: {
          Authorization: `Bearer ${$('meta[name=api_token]').attr('content')}`
        }
      }).done(e => {
        this.userEngaged = e;
      });
    },
    loadCollections() {
      $.get({
        url: '/api/collections',
        data: {
          consumer: this.client,
          collection: this.collection,
          period: this.period
        },
        headers: {
          Authorization: `Bearer ${$('meta[name=api_token]').attr('content')}`
        }
      }).done(e => {
        this.collectionPerView = e;
      });
    },
    loadDataGraphicCompare() {
      $.get({
        url: '/api/graphic/compare',
        data: {
          consumer: this.client,
          collection: this.collection,
          period: this.period,
          tag: this.tag
        },
        headers: {
          Authorization: `Bearer ${$('meta[name=api_token]').attr('content')}`
        }
      }).done(e => {
        this.graphicCompareData = e;
      });
    },
    loadDataGraphicClient() {
      $.get({
        url: '/api/graphic/client',
        data: {
          consumer: this.client,
          collection: this.collection,
          period: this.period,
          tag: this.tag
        },
        headers: {
          Authorization: `Bearer ${$('meta[name=api_token]').attr('content')}`
        }
      }).done(e => {
        this.graphicClientData = e;
      });
    },
    loadDataGraphicConsumer() {
      $.get({
        url: '/api/graphic/consumer',
        data: {
          consumer: this.client,
          collection: this.collection,
          period: this.period
        },
        headers: {
          Authorization: `Bearer ${$('meta[name=api_token]').attr('content')}`
        }
      }).done(e => {
        this.graphicConsumption = e;
      });
    },
    loadDataGraphicKnobConsumer() {
      $.get({
        url: '/api/graphic/knob/consumer',
        data: {
          consumer: this.client,
          collection: this.collection,
          period: this.period
        },
        headers: {
          Authorization: `Bearer ${$('meta[name=api_token]').attr('content')}`
        }
      }).done(e => {
        this.graphicKnobConsumer = e;
      });
    },
    createGraphicClientData() {
      Highcharts.chart('graphicPipeMonth', {
        chart: {
          type: 'column'
        },
        title: {
          text: ''
        },
        xAxis: {
          categories: this.graphicClientData.categories,
          crosshair: true
        },
        yAxis: {
          title: {
            text: 'Visualizações'
          }
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
            borderRadius: 5
          }
        },
        legend: {
          symbolRadius: 2
        },
        series: [{
          name: 'Total',
          data: this.graphicClientData.data,
          color: '#556ee6'
        }],
        credits: {
          enabled: false
        }
      });
    },
    createGraphicCompareData() {
      Highcharts.chart('graphicMonthCompare', {
        chart: {
          type: 'areaspline',
          zoomType: 'xy',
          zoomBySingleTouch: true,
          startOnTick: true,
        },
        mapNavigation: {
          enabled: true,
          enableDoubleClickZoom: true,
          enableMouseWheelZoom: true,
          enableTouchZoom: true,
          mouseWheelSensitivity: 2
        },
        title: {
          text: ''
        },
        xAxis: {
          categories: this.graphicCompareData.categories,
          crosshair: true,
          scrollbar: {
            enabled: true
          }
        },
        yAxis: {
          title: {
            text: 'Visualizações'
          }
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
            borderRadius: 5
          }
        },
        legend: {
          symbolRadius: 2
        },
        series: [{
          name: 'Acessos',
          data: this.graphicCompareData.data,
          fillColor: 'rgba(52, 195, 143, 0.3)',
          color: '#34C38F'
        }],
        credits: {
          enabled: false
        }
      });
    },
    createGraphicConsumption() {
      Highcharts.chart('graphicMonthConsumption', {
        chart: {
          type: 'column'
        },
        title: {
          text: ''
        },
        xAxis: {
          categories: this.graphicConsumption.categories,
          crosshair: true
        },
        yAxis: {
          title: {
            text: 'Visualizações'
          }
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
            borderRadius: 5
          }
        },
        legend: {
          symbolRadius: 2
        },
        series: [{
          name: 'Total',
          data: this.graphicConsumption.total,
          color: '#F1B44C'
        }, {
          name: 'Consumo',
          data: this.graphicConsumption.data,
          color: '#F46A6A'
        }],
        credits: {
          enabled: false
        }
      });
    },
    createGraphicConsumerKnob() {
      var gaugeOptions = {

        chart: {
          type: 'solidgauge',
          borderWidth: '20%'
        },

        title: null,

        pane: {
          center: ['50%', '50%'],
          size: '100%',
          startAngle: 0,
          endAngle: 360,
          background: {
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
            innerRadius: '90%',
            outerRadius: '100%',
            shape: 'arc'
          }
        },

        tooltip: {
          enabled: false
        },

        // the value axis
        yAxis: {
          stops: [
            [0.1, '#556ee6'], // green
            [0.5, '#556ee6'], // yellow
            [0.9, '#556ee6'] // red
          ],
          lineWidth: 0,
          minorTickInterval: null,
          tickPixelInterval: 400,
          tickWidth: 0,
          title: {
            y: -70
          },
          labels: {
            enabled: false
          }
        },

        plotOptions: {
          solidgauge: {
            innerRadius: '90%',
            dataLabels: {
              y: -20,
              borderWidth: 0,
              useHTML: true
            }
          }
        }
      };

      Highcharts.chart('graphicConsumerKnob', Highcharts.merge(gaugeOptions, {
        yAxis: {
          min: 0,
          max: 100,
        },
        series: [{
          name: 'Total',
          data: [this.graphicKnobConsumer.percentage],
          dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;" class="text-primary">{y}%</span><br/>' +
              '</div>'
          },
        }],
        credits: {
          enabled: false
        }
      }));
    },
  }
});
