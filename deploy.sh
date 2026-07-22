#!/usr/bin/env bash
# Builds the web app and syncs it to mbs.pageon.be.
#
# Uses the `pageon` SSH host (see ~/.ssh/config) and mirrors dist/ into
# /mbs on the server, removing anything there that's no longer part of the
# build. The /stats folder is left untouched since it isn't part of this
# app's build output.
set -euo pipefail

cd "$(dirname "$0")"

REMOTE_HOST="pageon"
REMOTE_PATH="/mbs"

echo "Building..."
npm run build

echo "Deploying dist/ to ${REMOTE_HOST}:${REMOTE_PATH} ..."
rsync -avz --delete \
  --exclude '/stats' \
  dist/ "${REMOTE_HOST}:${REMOTE_PATH}/"

echo "Deploy complete."
