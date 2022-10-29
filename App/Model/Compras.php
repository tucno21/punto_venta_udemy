<?php

namespace App\Model;

use System\Model;

class Compras extends Model
{
    /**
     * nombre de la tabla
     */
    protected static $table       = 'compras';
    /**
     * nombre primary key
     */
    protected static $primaryKey  = 'id';
    /**
     * nombre de la columnas de la tabla
     */
    protected static $allowedFields = ['productos', 'total', 'serie', 'estado', 'id_proveedor', 'id_usuario'];
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

    public static function datoCompra($data)
    {
        // 'compras.id', 'compras.created_at, compras.total', 'compras.serie',  'proveedor.nombre'
        $sql = "SELECT compras.id, compras.productos, compras.total, compras.serie, compras.estado, compras.created_at, proveedor.ruc, proveedor.nombre, proveedor.telefono, proveedor.direccion FROM compras INNER JOIN proveedor ON compras.id_proveedor = proveedor.id WHERE compras.id = $data";

        return self::querySimple($sql);
    }
}
