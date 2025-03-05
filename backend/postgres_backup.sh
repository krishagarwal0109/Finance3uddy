#!/bin/bash
PGPASSWORD="1234" pg_dump -U sanju -h localhost findb > /home/krish/backend/backup_$(date +%Y%m%d%H%M).sql
