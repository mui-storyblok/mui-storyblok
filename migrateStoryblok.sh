#!/bin/bash

# hacky fix for storyblok-migrate to migrate all componets in the storyblok dir
# https://github.com/maoberlehner/storyblok-migrate/issues/2 

for file in ./storyblok/*
do
  # splits stirng to compoents name
  remove_storyblok="${file:12}"
  component="${remove_storyblok:0:${#remove_storyblok}-3}"

  if [ "$component" != "config" ]
    then 
    # storyblok migrate one component at a time
    cmd="npx storyblok-migrate --component-migrations --components $component"
    OUTPUT=$(eval $cmd)
  fi
done

