#! /bin/zsh

echo 'eval "$(oh-my-posh init zsh --config '\''/usr/local/share/theme.omp.json'\'')"' >> ~/.zshrc
echo 'eval "$(fnm env --version-file-strategy=recursive --corepack-enabled --resolve-engines --shell zsh)"' >> ~/.zshrc

oh-my-posh font install FiraMono

source ~/.zshrc

fnm install
fnm use

pnpm i
