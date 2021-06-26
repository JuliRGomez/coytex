from django.db import models


class Clientes(models.Model):

    tipo = models.CharField(max_length=2)
    numero_documento = models.CharField(max_length=12)
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=100)
    telefono = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    nombre_contaco = models.CharField(max_length=100)

