{
  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.11";
  };

  outputs = inputs:
    inputs.flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = (import (inputs.nixpkgs) { inherit system; });
      in {
        devShell = pkgs.mkShell {
          buildInputs=[
            pkgs.git
            pkgs.pnpm
            pkgs.nodejs_22
            pkgs.typescript
            pkgs.typescript-language-server
            pkgs.vscode-langservers-extracted
          ];
        };
      }
    );
}
