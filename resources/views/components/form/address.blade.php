<fieldset class="mt-3">

    <legend class="font-small">{{ __('Endereço') }}</legend>

    <div class="address-wrapper">

        <div id="address-sidebar">

            <input type="hidden" name="location[lat]" id="inputLat" value="{{ $register->lat_lng->latitude ?? null }}">
            <input type="hidden" name="location[lng]" id="inputLng" value="{{ $register->lat_lng->longitude ?? null }}">

            <div class="form-group mb-2">
                <div class="form-group mb-2">
                    <input type="text" class="form-control" name="location[zipcode]" id="inputCEP"
                        value="{{ $register->zipcode ?? null }}" placeholder="{{ __('CEP') }}">
                </div>
                <select name="location[id_country]" id="inputCountry" data-old="{{ $register->country ?? null }}"
                    class="form-control">
                    <option value="" disabled selected>{{ __('Selecione') }}</option>
                    @foreach ($countries as $value)
                        <option value="{{ $value->id }}" @if (isset($register->country) && $register->country == $value->descr->name) selected @endif>
                            {{ $value->descr->name }}
                        </option>
                    @endforeach
                </select>
            </div>
            <div class="form-group mb-2">
                <input type="text" class="form-control" name="location[state]" id="inputState"
                    value="{{ $register->state ?? null }}" placeholder="{{ __('Estado/Província') }}">
            </div>
            <div class="form-group mb-2">
                <input type="text" class="form-control" name="location[city]" id="inputCity"
                    value="{{ $register->city ?? null }}" placeholder="{{ __('Cidade') }}">
            </div>
            <div class="form-group mb-2">
                <input type="text" class="form-control" name="location[district]" id="inputSuburb"
                    value="{{ $register->district ?? null }}" placeholder="{{ __('Bairro') }}">
            </div>
            <div class="form-group mb-2">
                <input type="text" class="form-control" name="location[address]" id="inputStreet"
                    value="{{ $register->address ?? null }}" placeholder="{{ __('Rua') }}">
            </div>
            <div class="form-group mb-2">
                <input type="text" class="form-control inputmask-decimal" name="location[number]"
                    value="{{ $register->number ?? null }}" id="inputNumber" placeholder="{{ __('Número') }}">
            </div>
            <div class="form-group mb-2">
                <input type="text" class="form-control" name="location[complement]"
                    value="{{ $register->complement ?? null }}" id="inputAdditionaInfo"
                    placeholder="{{ __('Complemento') }}">
            </div>

            <button class="btn btn-block btn-primary find-place" type="button">{{ __('Buscar') }} <i
                    class="fa fa-fw fa-search"></i></button>

        </div>

        <div id="address-map"></div>

    </div>

</fieldset>

@once
    @push('scripts')
        <script>
            const states = {!! json_encode($states) !!};
        </script>

        <script type="text/javascript"
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCP847MwRnY6qKfOwPIAy3Mwq7ItKkm4oE"></script>
        <script type="text/javascript" src="{{ asset('assets/libs/jquery.ui.map.js') }}"></script>
        <script type="text/javascript" src="{{ asset('assets/libs/jquery.ui.map.extensions.js') }}"></script>
        <script type="text/javascript" src="{{ asset('assets/libs/jquery.ui.map.services.js') }}"></script>
        <script type="text/javascript" src="{{ mix('assets/components/form/address.js') }}"></script>
    @endpush
@endonce
