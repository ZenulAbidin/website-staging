#!/bin/bash
cd ~/website-staging && git pull && npm run build && cp -R build/* ~/zenulabidin.github.io && cd ~/zenulabidin.github.io && git add * && git commit && git push origin master && cd ~
