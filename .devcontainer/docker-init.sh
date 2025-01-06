#! /bin/zsh

echo 'eval "$(oh-my-posh init zsh --config '\''/usr/local/share/theme.omp.json'\'')"' >> ~/.zshrc
echo 'eval "$(fnm env --use-on-cd --version-file-strategy=recursive --corepack-enabled --resolve-engines --shell zsh)"' >> ~/.zshrc

oh-my-posh font install FiraMono

source ~/.zshrc

pnpm i
