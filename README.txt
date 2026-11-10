PLACEMENT STUDY - all 4 versions
1) Unzip. Open a terminal INSIDE the placement-study folder (the one with setup.mjs).
2) node setup.mjs          -> installs and builds all four. Copy the gzip sizes it prints (Test A).
3) cd v1-plain  &  npm run dev   -> check the app looks right (then Ctrl+C, cd ..).
4) node measure.mjs v1-plain 5   (then v2-modules, v3-tailwind, v4-styled)  -> Test B.
5) Test C by hand: cd v1-plain  &  npm run preview  -> open http://localhost:4173/aptitude?n=100
   Hard reload (Ctrl+Shift+R), read "render ms" in the Console (F12). Repeat for ?n=500 and ?n=2000.
