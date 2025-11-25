# weekly-rom-patches
a configurable system for automating patch releases for your romhack!

## how to use:
1) plop both `.yml` files in the `.github/workflows/` folder into your own repos `.github/workflows/` folder.
2) find this section in either of them:
```yml
env:
    GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}

    # your github username
    BASE_AUTHOR: pret
    HACK_AUTHOR: khbsd

    # your gba filename
    BASE_ROM: pokeemerald
    HACK_ROM: pokeemerald_kaya

    # what your repo is named
    BASE_REPO: pokeemerald
    HACK_REPO: pokeemerald-expansion-kaya

    # the patch type you want to create
    PATCH_TYPE: bps
```
3) edit the `HACK_AUTHOR`, `HACK_ROM`, and `HACK_REPO` variables so that they match your own hacks repo. `HACK_AUTHOR` and `HACK_REPO` refer to parts of the url for your hack' repository, so in this case: `https://github.com/<HACK_AUTHOR>/<HACK_REPO>`. the `HACK_ROM` variable refers to the output .gba file your code compiles, without the .gba extension.
3) edit the `BASE_AUTHOR`, `BASE_ROM`, and `BASE_REPO` ***if*** your hack does not use pokemon emerald as a base.
4) edit the `PATCH_TYPE` variable to any type supported by `Rompatcher.js`. bps is objectively the best, though :)
5) once done, copy those variables to the other file, so both files have your edited variables and they match.
6) use https://crontab.guru/ to choose your release schedule, and edit the following section in `weekly-patch-release.yml` to match your desired schedule:
```yml
on:
  schedule:
      # 02:38 every tuesday
    - cron: '38 2 * * 2'
```
7) push that shit and youre ready to rock babyyy

### note on releases:
by default the release system just uses `gh release` and the sha of the latest commit, but if youd like auto versioning etc id look into some of the more complex release setups, like the one by `softprops`.