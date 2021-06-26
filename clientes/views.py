from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from clientes.models import Clientes
from clientes.serializers import ClientesSerializer


class ClientesViewSet(ModelViewSet):
    queryset = Clientes.objects.all()
    serializer_class = ClientesSerializer