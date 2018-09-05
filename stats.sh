#!/bin/bash
cat links/* | sort | uniq -c | sort -n -k 1
