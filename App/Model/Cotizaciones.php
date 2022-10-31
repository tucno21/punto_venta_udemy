<?php

namespace App\Model;

use System\Model;

class Cotizaciones extends Model
{
    /**
     * nombre de la tabla
     */
    protected static $table       = 'cotizaciones';
    /**
     * nombre primary key
     */
    protected static $primaryKey  = 'id';
    /**
     * nombre de la columnas de la tabla
     */
    protected static $allowedFields = ['productos', 'total', 'validez', 'id_cliente'];
    /**
     * obtener los datos de la tabla en 'array' u 'object'
     */
    protected static $returnType     = 'object';
    /**
     * si hay un campo de contraseña cifrar (true/false)
     */
    protected static $passEncrypt = false;

    protected static $useTimestamps   = true;
    /**
     * $createdField debe ser DATETIME o TIMESTAMPS con condicion null
     * $$updatedField debe ser TIMESTAMPS con condicion null
     * el framework se encarga de enviar las fechas y no BD
     * colocar el nombre de los campos de fecha de la BD
     */
    protected static $createdField    = 'created_at';
    protected static $updatedField    = 'updated_at';

    public static function datoCotizacion($data)
    {
        // 'ventas.id', 'ventas.created_at, ventas.total', 'ventas.serie',  'clientes.nombre'
        $sql = "SELECT cotizaciones.id, cotizaciones.productos, cotizaciones.total, cotizaciones.validez, cotizaciones.created_at, clientes.identidad, clientes.num_identidad, clientes.nombre, clientes.telefono,clientes.direccion FROM cotizaciones INNER JOIN clientes ON cotizaciones.id_cliente = clientes.id WHERE cotizaciones.id = $data";

        return self::querySimple($sql);
    }
}
