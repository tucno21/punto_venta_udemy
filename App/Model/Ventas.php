<?php

namespace App\Model;

use System\Model;

class Ventas extends Model
{
    /**
     * nombre de la tabla
     */
    protected static $table       = 'ventas';
    /**
     * nombre primary key
     */
    protected static $primaryKey  = 'id';
    /**
     * nombre de la columnas de la tabla
     */
    protected static $allowedFields = ['productos', 'total', 'estado', 'metodo', 'descuento', 'serie', 'apertura', 'id_cliente', 'id_usuario'];
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

    public static function datoVenta($data)
    {
        // 'ventas.id', 'ventas.created_at, ventas.total', 'ventas.serie',  'clientes.nombre'
        $sql = "SELECT ventas.id, ventas.productos, ventas.total, ventas.serie, ventas.estado,ventas.metodo,ventas.descuento, ventas.created_at, clientes.identidad, clientes.num_identidad, clientes.nombre, clientes.telefono,clientes.direccion FROM ventas INNER JOIN clientes ON ventas.id_cliente = clientes.id WHERE ventas.id = $data";

        return self::querySimple($sql);
    }
}
