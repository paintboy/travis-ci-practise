#!/bin/bash
echo "${TRAVIS_BUILD_NUMBER}"
node crawl.js "build${TRAVIS_BUILD_NUMBER}.example.tld"
printf "\nCrawled Pages:\n$(cat crawled.csv)\n\n"
if [ -s csp-reports.txt ]; then printf "Content Security Policy Reports:\n$(cat csp-reports.txt)"; else printf "No Reports Generated! Success!"; fi
