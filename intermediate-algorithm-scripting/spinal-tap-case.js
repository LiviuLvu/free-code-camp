function spinalCase(str) {
  str = str
    // replace space and underscore with dash
    .replace(/[\s_]/g, '-')
    // replace lower and uppercase letter groups with same groups and dash between them
    .replace(/([a-z])([A-Z])/g, '$1-$2');

  return str.toLowerCase();
}

spinalCase("This Is_Spinal_TapTapTap a b c");
