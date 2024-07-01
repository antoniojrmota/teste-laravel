@extends('site.layouts.master')

@section('content')
    <style>
        .page-content {
            padding-top: 100px;
        }

        .result-title {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 20px;
            color: #333;
            text-align: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .card {
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.3s ease-in-out;
            margin-bottom: 20px;
        }

        .card:hover {
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
        }

        .card-title {
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 10px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            text-align: center;
        }

        .card-text {
            font-size: 1rem;
            margin-bottom: 5px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            text-align: center;
        }

        .card-img-top {
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            display: block;
            margin: 0 auto;
        }

        .text-success,
        .text-danger {
            padding: 4px 8px;
            border-radius: 4px;
            display: inline-block;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        }

        .text-success {
            color: green;
            border: 1px solid green;
        }

        .text-danger {
            color: red;
            border: 1px solid red;
        }

        .mb-4 {
            margin-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
            .col-md-4 {
                flex: 0 0 100%;
                max-width: 100%;
            }
        }
    </style>

    <div class="page-content">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="result-title">Resultados da Pesquisa</h2>
                    @foreach ($results as $result)
                        <div class="card col-md-4 mb-4">
                            @if (isset($result['photos'][0]['photo_reference']))
                                <img src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference={{ $result['photos'][0]['photo_reference'] }}&key={{ $apiKey }}"
                                    class="card-img-top img-fluid" alt="Foto do Local">
                            @endif
                            <div class="card-body" style="padding: 15px; text-align: center;">
                                <h5 class="card-title">{{ $result['name'] }}</h5>
                                <p class="card-text">{{ $result['vicinity'] }}</p>
                                <p class="card-text">Avaliação: {{ $result['rating'] }}</p>
                                @if (isset($result['opening_hours']['open_now']))
                                    @if ($result['opening_hours']['open_now'] == true)
                                        <p class="text-success mb-0">Aberto agora</p>
                                    @else
                                        <p class="text-danger mb-0">Fechado agora</p>
                                    @endif
                                @endif
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
@endsection
