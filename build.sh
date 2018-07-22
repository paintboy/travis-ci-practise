#!/bin/bash
node crawl.js
printf "\nCrawled Pages:\n$(cat crawled.csv)\n\n"
cat csp-reports.txt
#if [ -s csp-reports.json ]; then printf "Content Security Policy Reports:\n$(cat csp-reports.txt)"; else printf "No Reports Generated! Success!"; fi
