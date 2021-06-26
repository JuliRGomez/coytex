from django.db import models
from datetime import datetime

from clientes.models import Clientes


class Pedidos(models.Model):
    fecha_solicitud = models.DateField()
    fecha_entrega = models.DateField()
    cliente = models.ForeignKey(Clientes, related_name='user_pedido', on_delete=models.SET_NULL,null=True)
    fecha_creacion = models.DateTimeField(default=datetime.now)
    nombre_usuario = models.CharField(max_length=100)
    estado = models.CharField(max_length=100)


