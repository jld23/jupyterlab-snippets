# jupyterlab-snippets

![Github Actions Status](https://github.com/jld23/jupyterlab-snippets/workflows/Build/badge.svg)
[![Version](https://img.shields.io/pypi/v/jupyterlab-sas-snippets.svg)](https://pypi.python.org/project/jupyterlab-sas-snippets)
[![Conda Version](https://img.shields.io/conda/vn/conda-forge/jupyterlab-snippets.svg)](https://anaconda.org/conda-forge/jupyterlab-snippets)
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/jld23/jupyterlab-snippets/stable?urlpath=lab/tree/binder/notebook.ipynb)

Snippets Extension for JupyterLab.

This extension is composed of a Python package named `jupyterlab-sas-snippets`
for the server extension and a NPM package named `jupyterlab-sas-snippets`
for the frontend extension.

## Requirements

- JupyterLab >= 2.0
- Node.js

## Install

Using conda:

```
conda install -c conda-forge jupyterlab-sas-snippets
```

Using pip:

```bash
pip install jupyterlab-sas-snippets
```

Rebuild JupyterLab:

```bash
jupyter lab build
```

## Usage

Add snippets in `[jupyter_data_dir]/snippets` (see: https://jupyter.readthedocs.io/en/latest/projects/jupyter-directories.html#id2)

To find the Jupyter data directory, run:
```bash
$ jupyter --path
```
This will for example show the following list on macOS:
```
config:
    /Users/<username>/.jupyter
    ...
data:
    /Users/<username>/Library/Jupyter
    /Users/<username>/miniconda3/envs/<envname>/share/jupyter
    ...
runtime:
    ...
```

Use the first directory listed under `data:` to add files to, these become snippets in the menu. Each file contains one
snippet. Directories can be used to organize the snippet files and will become submenu's in the menu.

In JupyterLab, use the "Snippets" menu to select the snippet:

<img width="570" alt="Schermafbeelding 2020-03-30 om 17 25 31" src="https://user-images.githubusercontent.com/46192475/77930697-8257fd00-72ab-11ea-8a77-36f45d6442d9.png">

## Troubleshoot

If you are seeing the frontend extension but it is not working, check
that the server extension is enabled:

```bash
jupyter serverextension list
```

If the server extension is installed and enabled but you are not seeing
the frontend, check the frontend extension is installed and enabled:

```bash
jupyter labextension list
```

If it is installed, try:

```bash
jupyter lab clean
jupyter lab build
```

## Contributing

### Development Install

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Move to jupyterlab-snippets directory
# Install the server extension
pip install -e .

# Register the server extension
jupyter serverextension enable --py jupyterlab-sas-snippets

# Install the dependencies
jlpm

# Build the TypeScript source
jlpm build

# Link your development version of the extension with JupyterLab
jupyter labextension link .

# Rebuild the TypeScript source after making changes
jlpm build

# Rebuild JupyterLab after making any changes
jupyter lab build
```

You can watch the source directory and run JupyterLab in watch mode to watch for changes in the extension's source and automatically rebuild the extension and application.

```bash
# Watch the source directory in another terminal tab
jlpm watch

# Run jupyterlab in watch mode in one terminal tab
jupyter lab --watch
```

### Uninstall

```bash
pip uninstall jupyterlab-sas-snippets
jupyter labextension uninstall jupyterlab-sas-snippets
```
