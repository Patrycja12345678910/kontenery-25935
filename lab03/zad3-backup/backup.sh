#!/bin/bash

VOLUME_NAME="pgdata-zad3"
BACKUP_DIR="$(cd "$(dirname "$0")" && pwd -W)/backups"
TIMESTAMP=$(date +%Y%m%d-%H%M%S)

mkdir -p "$BACKUP_DIR"

docker run --rm \
  -v "$VOLUME_NAME:/source:ro" \
  -v "$BACKUP_DIR:/backup" \
  ubuntu tar czf "/backup/backup-$TIMESTAMP.tar.gz" -C /source .

echo "Backup utworzony: backup-$TIMESTAMP.tar.gz"
