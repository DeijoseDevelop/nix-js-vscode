# Nix.js VS Code Toolkit - Plan Completo 1.0.0

Documento operativo para cerrar el camino de la serie 0.3.x hacia 1.0.0.

## Estado Actual (Base: 0.3.2)

| Area | Estado | Evidencia |
| --- | --- | --- |
| Grammar html/svg + nested interpolation | Parcialmente estable | syntaxes/*.tmLanguage.json + fixtures |
| Autocomplete eventos/modificadores | Implementado | extension.js |
| Diagnosticos y quick fixes | Implementado | extension.js + event-modifiers.js |
| Runtime tests + grammar tests + smoke | Implementado | tests/run-runtime-tests.js + tests/run-grammar-tests.js + tests/run-smoke-tests.js |
| Publish local VSIX | Implementado | vscode-nix-0.3.2.vsix |
| QA multi-version VS Code | Pendiente | sin matriz documentada |
| QA tema light/dark | Pendiente | sin checklist de evidencia |
| Release process 1.0.0 | Pendiente | sin checklist de RC firmado |

## Definition of Done 1.0.0

La version 1.0.0 solo se publica cuando todos estos puntos estan completos.

### A. Estabilidad de grammar

- [x] Fixtures para nested templates, arrow functions, atributos con modificadores, svg.
- [x] Scopes diferenciados para evento base, modificador y directiva.
- [x] Soporte js/jsx/ts/tsx.
- [x] Smoke suite sobre ejemplos reales de nix-js-docs (main.ts) disponible y automatizada.

### B. Inteligencia de editor

- [x] Sugerencias de eventos base con @.
- [x] Sugerencias de modificadores con . despues del evento.
- [x] Sugerencias key-aware para keydown/keyup/keypress.
- [x] Directivas oficiales ref/show/hide.
- [x] Tags configurables con nixjs.tags.
- [x] Normalizacion opcional de orden de modificadores via quick fix.

### C. Diagnosticos y quick fixes

- [x] unknown-modifier.
- [x] duplicate-modifier.
- [x] passive-prevent-conflict.
- [x] key-modifier-on-non-key-event.
- [x] Quick fixes para dedupe/conflicto/unknown.
- [x] Hover help de modificadores.

### D. Calidad y pruebas

- [x] npm test verde en Linux.
- [x] Cobertura runtime para parser/suggestions/diagnostics/fixes.
- [x] Cobertura grammar para scopes clave.
- [x] Script de smoke manual con pasos y evidencia por caso.
- [ ] CI reproducible para test y package en push/pr.

### E. Compatibilidad

- [ ] Validado en 2 versiones de VS Code (stable y previous).
- [ ] Validado en tema oscuro y claro.
- [ ] Validado con y sin extensiones de tagged templates de terceros.

### F. Documentacion y release

- [x] README con features, settings y troubleshooting.
- [x] CHANGELOG actualizado.
- [ ] Seccion Release Candidate 1.0.0 en README o release notes.
- [ ] Checklist de publicacion marketplace ejecutado y firmado.

## Backlog Priorizado (Tablero de Ejecucion)

| ID | Fase | Prioridad | Tarea | Estado |
| --- | --- | --- | --- | --- |
| A1 | A Hardening | Alta | Agregar smoke tests manuales sobre main.ts real de nix-js-docs | Completado |
| A2 | A Hardening | Alta | Crear fixture stress con 200+ lineas de templates anidados | Completado |
| A3 | A Hardening | Media | Quick fix opcional para normalizar orden de modificadores | Completado |
| B1 | B QA | Alta | Matriz VS Code stable/previous con evidencia de resultados | Pendiente |
| B2 | B QA | Alta | QA tema dark/light con captura de scopes clave | Pendiente |
| B3 | B QA | Media | QA con conflicto potencial lit-html habilitado/deshabilitado | Pendiente |
| C1 | C Release | Alta | Definir RC 1.0.0 y bloquear cambios no criticos | Pendiente |
| C2 | C Release | Alta | Generar vscode-nix-1.0.0.vsix y validar instalacion limpia | Pendiente |
| C3 | C Release | Alta | Publicar en marketplace + release notes + tag git | Pendiente |

## Plan por Iteraciones

### Iteracion 1 (0.3.2)

- Cerrar A1 y A2.
- Entregable: estabilidad funcional + evidencia manual reproducible.

### Iteracion 2 (0.3.3)

- Cerrar B1 y B2.
- Entregable: calidad de experiencia consistente en entornos distintos.

### Iteracion 3 (0.9.0 RC)

- Cerrar B3 y C1.
- Entregable: release candidate congelado, solo bugfixes criticos.

### Iteracion Final (1.0.0)

- Cerrar C2 y C3.
- Entregable: publicacion oficial 1.0.0.

## Checklist Operativo de Release 1.0.0

### Pre-release

- [ ] npm install
- [ ] npm test
- [ ] npm run package
- [ ] Instalar vscode-nix-1.0.0.vsix en entorno limpio
- [ ] Validar smoke suite manual

### Publicacion

- [ ] Actualizar version en package.json a 1.0.0
- [ ] Completar changelog 1.0.0
- [ ] Crear tag git v1.0.0
- [ ] npm run publish:marketplace
- [ ] Verificar instalacion fresh desde marketplace

### Post-release

- [ ] Abrir milestone 1.0.1 para fixes de campo
- [ ] Documentar incidentes/feedback de primera semana

## Comandos de Validacion

~~~bash
npm install
npm test
npm run package
code --install-extension vscode-nix-1.0.0.vsix --force
~~~

## Regla de Publicacion

No publicar 1.0.0 si existe al menos una condicion:

- algun criterio DoD en estado pendiente dentro de los bloques A-F
- bug severidad alta abierto en grammar/autocomplete/diagnostics
- discrepancia entre comportamiento de desarrollo y VSIX instalado limpio
