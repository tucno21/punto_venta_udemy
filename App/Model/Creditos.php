<?php

namespace App\Model;

use System\Model;

class Creditos extends Model
{
    /**
     * nombre de la tabla
     */
    protected static $table       = 'creditos';
    /**
     * nombre primary key
     */
    protected static $primaryKey  = 'id';
    /**
     * nombre de la columnas de la tabla
     */
    protected static $allowedFields = ['monto', 'estado', 'id_venta'];
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

    public static function creditos()
    {
        $sql = "SELECT creditos.id, creditos.monto, creditos.estado, creditos.created_at, ventas.serie, clientes.nombre FROM creditos INNER JOIN ventas ON creditos.id_venta = ventas.id INNER JOIN clientes ON ventas.id_cliente = clientes.id";
        return self::querySimple($sql);
    }

    public static function creditoId($id)
    {
        $sql = "SELECT creditos.id, creditos.monto, creditos.estado, creditos.created_at, ventas.serie, clientes.nombre FROM creditos INNER JOIN ventas ON creditos.id_venta = ventas.id INNER JOIN clientes ON ventas.id_cliente = clientes.id WHERE creditos.id = $id";
        return self::querySimple($sql);
    }

    public static function creditoIdComplet($id)
    {
        $sql = "SELECT creditos.id, creditos.monto, creditos.estado, creditos.created_at,
                        ventas.productos, ventas.serie, ventas.total, ventas.metodo,
                        clientes.identidad, clientes.num_identidad, clientes.nombre, clientes.telefono, clientes.direccion
                        FROM creditos INNER JOIN ventas ON creditos.id_venta = ventas.id INNER JOIN clientes ON ventas.id_cliente = clientes.id WHERE creditos.id = $id";
        return self::querySimple($sql);
    }
}
