# wallet-core-webpack-packaging

Repo to reproduce issue https://bugs.gnunet.org/view.php?id=6906

To reproduce:

 * go to wp4 or wp5 folder
 * download wallet-core: `git clone https://git.taler.net/wallet-core.git/ $WALLET_CORE_FOLDER`
 * install dependencies: `pnpm install`
 * link wallet-core dependency into local workspace: `pnpm install $WALLET_CORE_FOLDER`
 * run webpack: `pnpx webpack`

