#!/bin/bash
node crawl.js
printf "\n\nCrawled Pages:\n$(cat crawled.csv)\n\nContent Security Policy Reports:\n$(cat csp-reports.json)"
