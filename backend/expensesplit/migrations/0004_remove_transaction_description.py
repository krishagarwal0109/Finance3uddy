# Generated by Django 5.1.6 on 2025-02-28 06:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('expensesplit', '0003_rename_title_group_name_transaction_description_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='transaction',
            name='description',
        ),
    ]
