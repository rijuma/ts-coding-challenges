[![en](https://img.shields.io/badge/lang-en-blue.svg)](./README.md)
[![es](https://img.shields.io/badge/lang-es-green.svg)](./README.es.md)

# Desafíos de código en Typescript

Este repositorio es una colección de ejercicios de [Typescript](https://www.typescriptlang.org) con los que me encontré, los cuales me parecieron interesantes. Algunos de estos pueden ser "bocadillos" y otros pueden requerir un poco más de esfuerzo.

Por favor, revisen el repositorio de [interview-ready](https://github.com/silver-dev-org/interview-ready) provisto por [Silver.dev](https://silver.dev) el cual me inspiró para comenzar este proyecto.

Puede que no haya muchos ejercicios en este momento, pero la idea es ir agregándolos con el tiempo.

## La idea

Hay dos carpetas principales en el repositorio, `challenges` y `solutions`, y como seguro te habrás dado cuenta, los challenges son plantillas con ejercicios para que soluciones y las soluciones.. bueno, las soluciones que se me ocurrieron.

La intención es que practiques y trates de encontrar soluciones ingeniosas y "limpias". No tengo ninguna intención de que estas soluciones sean comparable con las que puedes encontrar en Leetcode. Si quieres ese tipo de desafío, te recomiendo ir diréctamente a [LeetCode](https://leetcode.com).

Para usar el repositorio, recomiendo hacer un fork de este repositorio, clonarlo y iniciarlo, por ejemplo usando `npm` ejecutar:

```bash
npm install
```

Luego puedes evaluar cualquier test de forma individual por medio de:

```bash
npm run test -- [pattern]
```

Donde `pattern` es un parámetro opcional cuyo valor corresponde al nombre parcial del archivo que quieres probar, por ejemplo:

```bash
npm run test -- closest-pair
```

Va a evaluar los tests para el ejercicio ubicado en:

```
challenges/recursion/closest-pair.ts
```

También puedes hacer un análisis de covertura con:

```bash
npm run test:coverage -- [pattern]
```

## Desafíos resueltos

Recomendaría intentar resolver los ejercicios por tu cuenta, si el uso de IA ni otro tipo de asistencia, salvo por la [guía de Javascript de MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript) y la documentación de [Typescript](https://www.typescriptlang.org/docs). Siempre podrás buscar soluciones en línea luego o ver las provistas en este proyecto.

De forma similar a los tests de los scripts mencionados anteriormente, hay un set de herramientas de testeo para las soluciones ya incluídas, como por ejemplo:

```bash
npm run test:solutions -- [pattern]
```

y

```bash
npm run test:solutions:coverage -- [pattern]
```

## Diviértete

Espero que encuentres esto útil y que te diviertas solucionando los challencges. Por favor, contáctame a [marcos@rigoli.dev](mailto:marcos@rigoli.dev) o crea un Pull Request con sugerencias, pero si lo haces, te pido por favor que te tomes el tiempo en trabajar en los enunciados y en los tests, generar los archivos correspondientes tanto en `challenges` como en `solutions` y que las instrucciones sean claras y precisas.

Saludos!
