from django.db import models


class Productos(models.Model):

    codigo = models.CharField(max_length=12)
    descripcion = models.CharField(max_length=40)
    talla = models.CharField(max_length=100)
    color = models.CharField(max_length=100)

