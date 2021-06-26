-- script punto 2.1

SELECT pedidos_pedidos.id ,nombre, fecha_solicitud, fecha_entrega,coalesce (sum(coytexdb.cantidad_cantidad.cantidad),0)  as total_unidades
FROM pedidos_pedidos inner join clientes_clientes on pedidos_pedidos.cliente_id = clientes_clientes.id 
inner join cantidad_cantidad on cantidad_cantidad.id_orden_id = pedidos_pedidos.id where pedidos_pedidos.estado = 'en proceso'
group by cantidad_cantidad.id_orden_id;

-- script punto 2.2

select clientes_clientes.nombre, count(pedidos_pedidos.cliente_id) as contador from pedidos_pedidos 
inner join clientes_clientes on pedidos_pedidos.cliente_id = clientes_clientes.id 
where pedidos_pedidos.fecha_solicitud  between '2021-01-01' and '2021-04-01' 
group by pedidos_pedidos.cliente_id having contador>=10
order by clientes_clientes.nombre,contador desc;


-- script punto 2.3
select productos_productos.codigo,productos_productos.descripcion, sum(cantidad_cantidad.cantidad) as total from cantidad_cantidad 
inner join productos_productos on cantidad_cantidad.producto_id = productos_productos.id 
inner join pedidos_pedidos on cantidad_cantidad.id_orden_id = pedidos_pedidos.id  
where pedidos_pedidos.fecha_solicitud between '2021-01-01' and '2021-06-01' 
group by cantidad_cantidad.producto_id order by total desc limit 10;


