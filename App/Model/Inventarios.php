<?php

namespace App\Model;

use System\Model;

class Inventarios extends Model
{
    /**
     * nombre de la tabla
     */
    protected static $table       = 'inventario';
    /**
     * nombre primary key
     */
    protected static $primaryKey  = 'id';
    /**
     * nombre de la columnas de la tabla
     */
    protected static $allowedFields = ['movimiento', 'accion', 'cantidad', 'id_producto', 'id_usuario'];
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

    public static function listarTodo()
    {
        $sql = "SELECT i.id, i.movimiento, i.accion, i.cantidad, i.created_at, p.descripcion, u.nombre as usuario FROM inventario i INNER JOIN productos p ON i.id_producto=p.id INNER JOIN users u ON i.id_usuario=u.id ORDER BY i.id DESC";
        return self::querySimple($sql);
    }
}
