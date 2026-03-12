import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssMergeRules from 'postcss-merge-rules';

export default {
  plugins: [
    postcssMergeRules,
    autoprefixer,
    cssnano,
  ],
};