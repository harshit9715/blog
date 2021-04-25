---
title: 'A quick way of making react components.'
date: '2021-03-22'
---

## Motivation

I was tired of creating directories, files and writing same name over and over again for creating react components. Here is a quick solution for it.

## Setup

- Copy and Paste the script in your .bachrc (linux/mac systems) at the very bottom.

## Script

```bash
#!/bin/bash
mkr() {
 for name in "$@"
 do
  mkdir $name;
  cd $name;
  touch index.js $name.module.css;
  echo """import React from 'react';
import styles from './$name.module.css';
const $name = props => {
    return (
        <h1>$name</h1>
    );
}
export default $name;""" > index.js;
  cd ..
 done
}

# Uncomment the line below when testing the script directly.
# "$@"
```

## Usage

```bash
cd <Inside_your_components_folder>
mkr <COMPONENT_1_NAME> <COMPONENT_2_NAME> ... <COMPONENT_N_NAME>
```

## Example

`mkr Account Admin App Home Landing SignIn SignOut SignUp`

## Testing

If you plan to use it directly then you need to give this script execute permissions by running

Paste the script below into a file and name it `mkr.sh`, and also uncomment the last section of the script.

```bash
# Add execute permissions
chmod +x mkr.sh
# run it as
./mkr.sh mkr <COMPONENT_1_NAME> <COMPONENT_2_NAME> ... <COMPONENT_N_NAME>
```
