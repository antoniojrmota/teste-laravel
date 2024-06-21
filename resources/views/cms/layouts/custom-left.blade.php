<!-- ========== Left Sidebar Start ========== -->
<div class="vertical-menu">
    <div data-simplebar class="h-100">
        <!--- Sidemenu -->
        <div id="sidebar-menu">
            <!-- Left Menu Start -->
            <ul class="metismenu list-unstyled" id="side-menu">
                <li class="menu-title" key="t-menu">Menu</li>
                @foreach ($CMSMenu as $menu)
                    <li class="{{ Request::is($menu['request']) ? 'mm-active' : '' }}">
                        @if (isset($menu['links']))
                            <a href="javascript: void(0);" class="has-arrow waves-effect">
                                <i class="bx {{ $menu['icon'] }}"></i>
                                <span>{{ $menu['label'] }}</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="true">
                                @foreach ($menu['links'] as $item)
                                    @can($item['can'])
                                        <li class="{{ Request::is($item['request']) ? 'mm-active' : '' }}">
                                            <x-menuItem link="{{ $item['link'] ?? null }}"
                                                label="{{ $item['label'] ?? null }}" icon="{{ $item['icon'] ?? null }}" />
                                        </li>
                                    @endcan
                                @endforeach
                            </ul>
                        @else
                            @can($menu['can'])
                                <x-menuItem :link="$menu['link']" :label="$menu['label']" :icon="$menu['icon']" />
                            @endcan
                        @endif
                    </li>
                @endforeach

                @canany(['Visualizar Usuários', 'Visualizar Grupos'])
                    <li>
                        <a href="javascript: void(0);" class="has-arrow waves-effect">
                            <i class="bx bx-cog me-2"></i>
                            <span key="t-layouts">{{ __('Administração') }}</span>
                        </a>
                        <ul class="sub-menu" aria-labelledby="topnav-admin">
                            @can('Visualizar Usuários')
                                <li><a href="{{ route('cms.usuarios.index') }}" key="t-user">{{ __('Usuários') }}</a>
                                @endcan
                                @can('Visualizar Grupos')
                                <li><a href="{{ route('cms.grupos.index') }}" key="t-groups">{{ __('Grupos') }}</a>
                                @endcan
                        </ul>
                    </li>
                @endcanany
            </ul>
        </div>
        <!-- Sidebar -->
    </div>
</div>
<!-- Left Sidebar End -->
