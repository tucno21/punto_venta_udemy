<?php

// DATOS GENERALES ADMIN
$title = 'Punto Venta';
$titleShort = 'PV';
$mainLink = base_url('/dashboard');
$logoAdmin = '../public/logo/logo.png';

//DATOS DEL USUARIO ADMIN
$userName = session()->user()->nombre;
$rolName = session()->user()->rol_name;

//MENU CERRAR O PERFIL DE ADMINISTRADOR
$menuSession = [
    [
        'text' => 'Logout',
        'url'  => route('login.logout'),
        'icon' => 'bi bi-box-arrow-right',
    ],
];



//CREACION DE ENLACES PARA EL MENU SIDEBAR
$linksSidebar = [
    can('dashboard.index') ?
        [
            'mode' => 'menu',
            'text' => 'Dashboard',
            'url'  => route('dashboard.index'),
            'icon' => 'bi bi-speedometer2',
        ] : null,
    can('users.index') || can('roles.index') ?
        [
            'mode' => 'submenu',
            'text'    => 'Usuarios',
            'url'    => '#',
            'icon' => 'bi bi-people',
            'submenu' => [
                can('users.index') ?
                    [
                        'text' => 'Usuarios',
                        'url'  => route('users.index'),
                        'icon' => 'fas fa-circle',
                    ] : null,
                can('roles.index') ?
                    [
                        'text' => 'Roles',
                        'url'  => route('roles.index'),
                        'icon' => 'fas fa-circle',
                    ] : null,
                [
                    'text' => 'Permisos',
                    'url'  => route('permissions.index'),
                    'icon' => 'fas fa-circle',
                ],
            ],
        ] : null,
    [
        'mode' => 'submenu',
        'text'    => 'Mantenimiento',
        'url'    => '#',
        'icon' => 'bi bi-card-checklist',
        'submenu' => [

            [
                'text' => 'Medidas',
                'url'  => route('medidas.index'),
                'icon' => 'fas fa-circle',
            ],

            [
                'text' => 'Categorias',
                'url'  => route('categorias.index'),
                'icon' => 'fas fa-circle',
            ],
            [
                'text' => 'Productos',
                'url'  => route('productos.index'),
                'icon' => 'fas fa-circle',
            ],
        ],
    ],
    [
        'mode' => 'menu',
        'text' => 'Clientes',
        'url'  => route('clientes.index'),
        'icon' => 'bi bi-people',
    ],
    [
        'mode' => 'menu',
        'text' => 'Proveedores',
        'url'  =>  route('proveedores.index'),
        'icon' => 'bi bi-truck',
    ],
    [
        'mode' => 'menu',
        'text' => 'Cajas',
        'url'  => 'hola',
        'icon' => 'bi bi-wallet2',
    ],
    [
        'mode' => 'menu',
        'text' => 'Compras',
        'url'  => route('compras.index'),
        'icon' => 'bi bi-cart4',
    ],
    [
        'mode' => 'menu',
        'text' => 'Ventas',
        'url'  => route('ventas.index'),
        'icon' => 'bi bi-cash',
    ],
    [
        'mode' => 'menu',
        'text' => 'Nueva Ventas',
        'url'  => route('ventas.create'),
        // 'icon' => 'bi bi-cash-coin',
        'icon' => 'bi bi-newspaper',
    ],
    [
        'mode' => 'menu',
        'text' => 'Administración de Creditos',
        'url'  => route('creditos.index'),
        'icon' => 'bi bi-credit-card-2-back',
    ],
    [
        'mode' => 'menu',
        'text' => 'Cotizaciones',
        'url'  => route('cotizaciones.index'),
        'icon' => 'bi bi-list-task',
    ],
    [
        'mode' => 'menu',
        'text' => 'Apartados',
        'url'  => route('apartados.index'),
        'icon' => 'bi bi-person-lines-fill',
    ],
    [
        'mode' => 'menu',
        'text' => 'Inventario & kardex',
        'url'  => 'hola',
        'icon' => 'bi bi-receipt',
    ],
    [
        'mode' => 'menu',
        'text' => 'Empresa',
        'url'  => route('configuracion.index'),
        'icon' => 'bi bi-building',
    ],
];



//ENLACES PARA CSS Y JS html
$linkURL = base_url;

$linksCss = [
    $linkURL . '/assets/css/style.css',
    $linkURL . '/assets/css/customizer.css',
    $linkURL . '/assets/css/icon/bootstrap-icons.css',
    $linkURL . '/assets/css/colorToast.css',
];

$linksScript = [
    $linkURL . '/assets/js/popper.min.js',
    $linkURL . '/assets/js/perfect-scrollbar.min.js',
    $linkURL . '/assets/js/bootstrap.min.js',
    $linkURL . '/assets/js/feather.min.js',
    $linkURL . '/assets/js/pcoded.js',
    $linkURL . '/assets/plugins/sweetalert2/sweetalert2.js',
    $linkURL . '/assets/plugins/ckeditor/ckeditor.js',
    $linkURL . '/assets/js/visorfoto.js',
    $linkURL . '/assets/js/alerts.js',
    $linkURL . '/assets/js/editorMensaje.js',
];
