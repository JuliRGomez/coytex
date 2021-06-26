from django.db import models

# Create your models here.
from pedidos.models import Pedidos
from productos.models import Productos


class Cantidad(models.Model):

    id_orden = models.ForeignKey(Pedidos, related_name='pedido_cantidad', on_delete=models.SET_NULL, null=True)
    cantidad = models.IntegerField()
    producto = models.ForeignKey(Productos, related_name='pedido_producto', on_delete=models.SET_NULL, null=True)
