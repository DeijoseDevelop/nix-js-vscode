# Smoke Tests (Manual) - Nix.js VS Code Toolkit

Archivo objetivo de smoke manual real:

- ../nix-js-docs/src/main.ts

## Pasos

1. Ejecutar `npm test` desde este paquete.
2. Ejecutar `npm run package` para generar VSIX.
3. Instalar VSIX local (`code --install-extension vscode-nix-<version>.vsix --force`).
4. Abrir `../nix-js-docs/src/main.ts`.
5. Verificar que se colorean correctamente:
   - HTML tags dentro de `html\``.
   - `@click` y `@input` como atributos de evento.
   - expresiones `${...}` anidadas (incluyendo `map` con `html\`` interno).
6. En una linea con `@click`, agregar `.prevent.stop` y confirmar autocompletado de modificadores.
7. Probar una cadena invalida (por ejemplo `.passive.prevent`) y confirmar diagnostico + quick fix.
8. Hover sobre `.prevent` para validar ayuda contextual.
9. Ejecutar `Nix.js: Inspect Template Scopes` sobre una linea dentro del template.

## Evidencia (completar por corrida)

- Fecha:
- VS Code version:
- Tema (dark/light):
- VSIX probado:
- Resultado: PASS/FAIL
- Notas:
