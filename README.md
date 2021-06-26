# brum

[![codecov](https://codecov.io/gh/Xaril/brum/branch/main/graph/badge.svg?token=KXZI3I44TM)](https://codecov.io/gh/Xaril/brum) ![example workflow](https://github.com/Xaril/brum/actions/workflows/main.yml/badge.svg)

## What is this?

This is a **website** used to calculate the price of using my **car** for various trips. It utilizes the [expense calculation](https://www.skatteverket.se/privat/etjansterochblanketter/svarpavanligafragor/avdrag/privatarbetsresorfaq/jagkorbiltillmittarbetevilketavdragkanjagfa.5.10010ec103545f243e80001517.html) provided by Skatteverket to determine how much to pay per swedish mile.

The distance travelled can either be input manually, or calculated automatically by using an integrated map component in the interface. This component utilizes [Mapbox](https://www.mapbox.com/) to provide the interface with an interactive map.

## How is this?

The interface is written in [React](https://reactjs.org/) using [Create React App](https://create-react-app.dev/). It utilizes the Hooks API and uses [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing.

**Note**: Mapbox seems to be a bit finnicky when it comes to testing with **Jest**, explaining why coverage is a bit low at the moment.

## Where is this?

The website is available at [brum.omstedt.com](https://brum.omstedt.com). It is adapted for both **desktop** and **mobile** use. It also works as a standalone **PWA**.
