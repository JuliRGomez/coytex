# Generated by Django 2.2 on 2021-06-26 15:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('clientes', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pedidos',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_solicitud', models.DateField()),
                ('fecha_entrega', models.DateField()),
                ('fecha_creacion', models.DateField(auto_now_add=True)),
                ('nombre_usuario', models.CharField(max_length=100)),
                ('estado', models.CharField(max_length=100)),
                ('cliente', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='user_pedido', to='clientes.Clientes')),
            ],
        ),
    ]
