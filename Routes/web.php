<?php

use System\Route;
use App\Controller\Auth\AuthController;
use App\Controller\BackView\RolController;
use App\Controller\BackView\UserController;
use App\Controller\BackView\VentaController;
use App\Controller\BackView\CompraController;
use App\Controller\BackView\MedidaController;
use App\Controller\BackView\ClienteController;
use App\Controller\BackView\CreditoController;
use App\Controller\BackView\ApartadoController;
use App\Controller\BackView\ProductoController;
use App\Controller\BackView\CategoriaController;
use App\Controller\BackView\DashboardController;
use App\Controller\BackView\ProveedorController;
use App\Controller\BackView\CotizacionController;
use App\Controller\BackView\InventarioController;
use App\Controller\BackView\PermissionController;
use App\Controller\BackView\ConfiguracionController;
use App\Controller\BackView\RolesPermissionController;

/**
 * cargar el autoloader de composer Y la configuracion de la aplicacion
 */
require_once dirname(__DIR__) . '/System/Autoload.php';

// autenticacion
Route::get('/', [AuthController::class, 'index'])->name('login.index');
Route::post('/', [AuthController::class, 'store']);
Route::get('/logout', [AuthController::class, 'logout'])->name('login.logout');


// BackView
Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard.index');

//usuarios
Route::get('/users', [UserController::class, 'index'])->name('users.index');
Route::get('/users/create', [UserController::class, 'create'])->name('users.create');
Route::post('/users/create', [UserController::class, 'store']);
Route::get('/users/edit', [UserController::class, 'edit'])->name('users.edit');
Route::post('/users/edit', [UserController::class, 'update']);
Route::get('/users/destroy', [UserController::class, 'destroy'])->name('users.destroy');
Route::get('/users/status', [UserController::class, 'status'])->name('users.status');

//roles
Route::get('/roles', [RolController::class, 'index'])->name('roles.index');
Route::get('/roles/create', [RolController::class, 'create'])->name('roles.create');
Route::post('/roles/create', [RolController::class, 'store']);
Route::get('/roles/edit', [RolController::class, 'edit'])->name('roles.edit');
Route::post('/roles/edit', [RolController::class, 'update']);
Route::get('/roles/destroy', [RolController::class, 'destroy'])->name('roles.destroy');

//permisos
Route::get('/permissions', [PermissionController::class, 'index'])->name('permissions.index');
Route::get('/permissions/create', [PermissionController::class, 'create'])->name('permissions.create');
Route::post('/permissions/create', [PermissionController::class, 'store']);
Route::get('/permissions/edit', [PermissionController::class, 'edit'])->name('permissions.edit');
Route::post('/permissions/edit', [PermissionController::class, 'update']);
Route::get('/permissions/destroy', [PermissionController::class, 'destroy'])->name('permissions.destroy');

//role y permisos
Route::get('/roles/permissions', [RolesPermissionController::class, 'edit'])->name('roles.permissions');
Route::post('/roles/permissions', [RolesPermissionController::class, 'update']);

//ConfiguracionController
Route::get('/configuracion', [ConfiguracionController::class, 'index'])->name('configuracion.index');
Route::post('/configuracion', [ConfiguracionController::class, 'update']);


//MedidaController
Route::get('/medidas', [MedidaController::class, 'index'])->name('medidas.index');
Route::get('/medidas/create', [MedidaController::class, 'create'])->name('medidas.create');
Route::post('/medidas/create', [MedidaController::class, 'store']);
Route::get('/medidas/edit', [MedidaController::class, 'edit'])->name('medidas.edit');
Route::post('/medidas/edit', [MedidaController::class, 'update']);
Route::get('/medidas/destroy', [MedidaController::class, 'destroy'])->name('medidas.destroy');
Route::get('/medidas/status', [MedidaController::class, 'status'])->name('medidas.status');

//CategoriaController
Route::get('/categorias', [CategoriaController::class, 'index'])->name('categorias.index');
Route::get('/categorias/create', [CategoriaController::class, 'create'])->name('categorias.create');
Route::post('/categorias/create', [CategoriaController::class, 'store']);
Route::get('/categorias/edit', [CategoriaController::class, 'edit'])->name('categorias.edit');
Route::post('/categorias/edit', [CategoriaController::class, 'update']);
Route::get('/categorias/destroy', [CategoriaController::class, 'destroy'])->name('categorias.destroy');
Route::get('/categorias/status', [CategoriaController::class, 'status'])->name('categorias.status');

//ProductoController
Route::get('/productos', [ProductoController::class, 'index'])->name('productos.index');
Route::get('/productos/create', [ProductoController::class, 'create'])->name('productos.create');
Route::post('/productos/create', [ProductoController::class, 'store']);
Route::get('/productos/edit', [ProductoController::class, 'edit'])->name('productos.edit');
Route::post('/productos/edit', [ProductoController::class, 'update']);
Route::get('/productos/destroy', [ProductoController::class, 'destroy'])->name('productos.destroy');
Route::get('/productos/status', [ProductoController::class, 'status'])->name('productos.status');

//ClienteController
Route::get('/clientes', [ClienteController::class, 'index'])->name('clientes.index');
Route::get('/clientes/create', [ClienteController::class, 'create'])->name('clientes.create');
Route::post('/clientes/create', [ClienteController::class, 'store']);
Route::get('/clientes/edit', [ClienteController::class, 'edit'])->name('clientes.edit');
Route::post('/clientes/edit', [ClienteController::class, 'update']);
Route::get('/clientes/destroy', [ClienteController::class, 'destroy'])->name('clientes.destroy');
Route::get('/clientes/status', [ClienteController::class, 'status'])->name('clientes.status');

//ProveedorController
Route::get('/proveedores', [ProveedorController::class, 'index'])->name('proveedores.index');
Route::get('/proveedores/create', [ProveedorController::class, 'create'])->name('proveedores.create');
Route::post('/proveedores/create', [ProveedorController::class, 'store']);
Route::get('/proveedores/edit', [ProveedorController::class, 'edit'])->name('proveedores.edit');
Route::post('/proveedores/edit', [ProveedorController::class, 'update']);
Route::get('/proveedores/destroy', [ProveedorController::class, 'destroy'])->name('proveedores.destroy');
Route::get('/proveedores/status', [ProveedorController::class, 'status'])->name('proveedores.status');

//CompraController
Route::get('/compras', [CompraController::class, 'index'])->name('compras.index');
Route::get('/compras/create', [CompraController::class, 'create'])->name('compras.create');
Route::post('/compras/create', [CompraController::class, 'store']);
// Route::get('/compras/edit', [CompraController::class, 'edit'])->name('compras.edit');
// Route::post('/compras/edit', [CompraController::class, 'update']);
Route::get('/compras/destroy', [CompraController::class, 'destroy'])->name('compras.destroy');
// Route::get('/compras/status', [CompraController::class, 'status'])->name('compras.status');

Route::get('/compras/barcode', [CompraController::class, 'barcode'])->name('compras.barcode');
Route::get('/compras/buscarnombre', [CompraController::class, 'buscarnombre'])->name('compras.buscarnombre');
Route::get('/compras/proveedor', [CompraController::class, 'proveedor'])->name('compras.proveedor');
Route::get('/compras/pdfCompra', [CompraController::class, 'pdfCompra'])->name('compras.pdfCompra');

//VentaController
Route::get('/ventas', [VentaController::class, 'index'])->name('ventas.index');
Route::get('/ventas/create', [VentaController::class, 'create'])->name('ventas.create');
Route::post('/ventas/create', [VentaController::class, 'store']);
Route::get('/ventas/edit', [VentaController::class, 'edit'])->name('ventas.edit');
Route::post('/ventas/edit', [VentaController::class, 'update']);
Route::get('/ventas/destroy', [VentaController::class, 'destroy'])->name('ventas.destroy');
Route::get('/ventas/status', [VentaController::class, 'status'])->name('ventas.status');

Route::get('/ventas/barcode', [VentaController::class, 'barcode'])->name('ventas.barcode');
Route::get('/ventas/buscarnombre', [VentaController::class, 'buscarnombre'])->name('ventas.buscarnombre');
Route::get('/ventas/cliente', [VentaController::class, 'cliente'])->name('ventas.cliente');
Route::get('/ventas/pdfVenta', [VentaController::class, 'pdfVenta'])->name('ventas.pdfVenta');
Route::get('/ventas/cantProducto', [VentaController::class, 'cantProducto'])->name('ventas.cantProducto');

//CreditoController
Route::get('/creditos', [CreditoController::class, 'index'])->name('creditos.index');
Route::get('/creditos/dataabono', [CreditoController::class, 'dataabono'])->name('creditos.dataabono');
Route::get('/creditos/abono', [CreditoController::class, 'abono'])->name('creditos.abono');
Route::post('/creditos/abono', [CreditoController::class, 'abono']);
Route::get('/creditos/pdfabono', [CreditoController::class, 'pdfabono'])->name('creditos.pdfabono');

//CotizacionController
Route::get('/cotizaciones', [CotizacionController::class, 'index'])->name('cotizaciones.index');
Route::get('/cotizaciones/create', [CotizacionController::class, 'create'])->name('cotizaciones.create');
Route::post('/cotizaciones/create', [CotizacionController::class, 'store']);
Route::get('/cotizaciones/edit', [CotizacionController::class, 'edit'])->name('cotizaciones.edit');
Route::post('/cotizaciones/edit', [CotizacionController::class, 'update']);
Route::get('/cotizaciones/destroy', [CotizacionController::class, 'destroy'])->name('cotizaciones.destroy');
Route::get('/cotizaciones/status', [CotizacionController::class, 'status'])->name('cotizaciones.status');

Route::get('/cotizaciones/barcode', [CotizacionController::class, 'barcode'])->name('cotizaciones.barcode');
Route::get('/cotizaciones/buscarnombre', [CotizacionController::class, 'buscarnombre'])->name('cotizaciones.buscarnombre');
Route::get('/cotizaciones/cliente', [CotizacionController::class, 'cliente'])->name('cotizaciones.cliente');
Route::get('/cotizaciones/pdfCotizacion', [CotizacionController::class, 'pdfCotizacion'])->name('cotizaciones.pdfCotizacion');
Route::get('/cotizaciones/cantProducto', [CotizacionController::class, 'cantProducto'])->name('cotizaciones.cantProducto');


//ApartadoController
Route::get('/apartados', [ApartadoController::class, 'index'])->name('apartados.index');
Route::get('/apartados/create', [ApartadoController::class, 'create'])->name('apartados.create');
Route::post('/apartados/create', [ApartadoController::class, 'store']);
Route::get('/apartados/edit', [ApartadoController::class, 'edit'])->name('apartados.edit');
Route::post('/apartados/edit', [ApartadoController::class, 'update']);
Route::get('/apartados/destroy', [ApartadoController::class, 'destroy'])->name('apartados.destroy');
Route::get('/apartados/listar', [ApartadoController::class, 'listar'])->name('apartados.listar');
Route::get('/apartados/apartadoid', [ApartadoController::class, 'apartadoid'])->name('apartados.apartadoid');

Route::get('/apartados/barcode', [ApartadoController::class, 'barcode'])->name('apartados.barcode');
Route::get('/apartados/buscarnombre', [ApartadoController::class, 'buscarnombre'])->name('apartados.buscarnombre');
Route::get('/apartados/cliente', [ApartadoController::class, 'cliente'])->name('apartados.cliente');
Route::get('/apartados/pdfApartado', [ApartadoController::class, 'pdfApartado'])->name('apartados.pdfApartado');
Route::get('/apartados/cantProducto', [ApartadoController::class, 'cantProducto'])->name('apartados.cantProducto');

//InventarioController
Route::get('/inventarios', [InventarioController::class, 'index'])->name('inventarios.index');
