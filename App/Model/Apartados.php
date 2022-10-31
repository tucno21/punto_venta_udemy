<?php

namespace App\Model;

use System\Model;

class Apartados extends Model
{
    /**
     * nombre de la tabla
     */
    protected static $table       = 'apartados';
    /**
     * nombre primary key
     */
    protected static $primaryKey  = 'id';
    /**
     * nombre de la columnas de la tabla
     */
    protected static $allowedFields = ['productos', 'fecha_apartado', 'fecha_retiro', 'abono', 'total', 'color', 'estado', 'id_cliente'];
    /**
     * obtener los datos de la tabla en 'array' u 'object'
     */
    protected static $returnType     = 'object';
    /**
     * si hay un campo de contraseña cifrar (true/false)
     */
    protected static $passEncrypt = false;

    protected static $useTimestamps   = false;
    /**
     * $createdField debe ser DATETIME o TIMESTAMPS con condicion null
     * $$updatedField debe ser TIMESTAMPS con condicion null
     * el framework se encarga de enviar las fechas y no BD
     * colocar el nombre de los campos de fecha de la BD
     */
    protected static $createdField    = 'created_at';
    protected static $updatedField    = 'updated_at';

    public static function listar()
    {
        // $sql = "SELECT apartados.id, apartados.productos, apartados.fecha_apartado, apartados.fecha_retiro, apartados.abono, apartados.total, apartados.color, apartados.estado, clientes.nombre, clientes.telefono, clientes.direccion FROM apartados INNER JOIN clientes ON apartados.id_cliente = clientes.id";
        //estado=1 y descendentemente
        $sql = "SELECT a.id, a.fecha_apartado, a.fecha_retiro, a.abono, a.total, a.color, a.estado, c.nombre, c.telefono, c.direccion FROM apartados a INNER JOIN clientes c ON a.id_cliente=c.id WHERE a.estado=1";
        return self::querySimple($sql);
    }
    public static function listarTodo()
    {
        $sql = "SELECT a.id, a.fecha_apartado, a.fecha_retiro, a.abono, a.total, a.color, a.estado, c.nombre, c.telefono, c.direccion FROM apartados a INNER JOIN clientes c ON a.id_cliente=c.id ORDER BY a.id DESC";
        return self::querySimple($sql);
    }

    public static function apartadoId($id)
    {
        $sql = "SELECT a.id,  a.abono, a.total, c.nombre FROM apartados a INNER JOIN clientes c ON a.id_cliente=c.id WHERE a.id=$id";
        return self::querySimple($sql);
    }
}
