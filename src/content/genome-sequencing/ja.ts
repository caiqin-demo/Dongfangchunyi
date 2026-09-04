import type { GenomeSequencingContent } from "@/content/genome-sequencing/types";

export const jaGenomeSequencingContent = {
  metadata: {
    title: "ゲノムシーケンシング | 東方純一",
    description: "動植物および微生物分野における第二・第三世代ゲノムおよびトランスクリプトームシーケンシング関連サービスに注力しています。",
  },
  title: "ゲノムシーケンシング",
  intro: "動植物および微生物分野における第二・第三世代ゲノムおよびトランスクリプトームシーケンシング関連サービスに注力しています。",
  optionGroupLabel: "シーケンシングの選択肢",
  options: [
    { id: "plant-and-cell", label: "植物・細胞" },
    { id: "animal-and-cell", label: "動物・細胞" },
    { id: "microorganism", label: "微生物" },
    { id: "multidimensional-analysis-platform", label: "多次元解析プラットフォーム" },
  ],
  body: {
    technicalRouteLabel: "技術フロー+",
    contact: {
      label: "お問い合わせ",
      emails: ["market@easternpurity.com", "info@shanghaigenomics.com"],
    },
    categories: [
      { id: "plant-and-cell", label: "植物・細胞", items: [{ id: "single-cell-sequencing", label: "シングルセルシーケンシング" }, { id: "genome-de-novo-sequencing", label: "de novoゲノムシーケンシング" }, { id: "absolute-quantification-microbial-diversity-sequencing", label: "微生物多様性の絶対定量シーケンシング" }, { id: "dap-seq-technical-service", label: "DAP-seq技術サービス" }, { id: "genome-resequencing", label: "ゲノムリシーケンシング" }] },
      { id: "animal-and-cell", label: "動物・細胞", items: [{ id: "single-cell-sequencing", label: "シングルセルシーケンシング" }, { id: "genome-de-novo-sequencing", label: "de novoゲノムシーケンシング" }, { id: "absolute-quantification-microbial-diversity-sequencing", label: "微生物多様性の絶対定量シーケンシング" }, { id: "dap-seq-technical-service", label: "DAP-seq技術サービス" }, { id: "whole-transcriptome-sequencing", label: "全トランスクリプトームシーケンシング" }] },
      { id: "microorganism", label: "微生物", items: [{ id: "single-cell-sequencing", label: "シングルセルシーケンシング" }, { id: "genome-de-novo-sequencing", label: "de novoゲノムシーケンシング" }, { id: "absolute-quantification-microbial-diversity-sequencing", label: "微生物多様性の絶対定量シーケンシング" }, { id: "dap-seq-technical-service", label: "DAP-seq技術サービス" }, { id: "marine-microbiology-research", label: "海洋微生物研究" }] },
      { id: "multidimensional-analysis-platform", label: "多次元解析プラットフォーム", items: [{ id: "epigenetics-service", label: "エピジェネティクスサービス" }, { id: "mrna-in-situ-hybridization", label: "mRNA in situハイブリダイゼーション" }, { id: "yeast-two-hybrid", label: "酵母ツーハイブリッド" }, { id: "spr-molecular-interaction-research", label: "SPR分子間相互作用解析技術" }, { id: "proteomics-and-metabolomics", label: "プロテオミクス＆メタボロミクス" }, { id: "multiomics-combined-analysis", label: "マルチオミクス統合解析" }] },
    ],
    publications: {
      title: "お客様による発表論文",
      items: [
        { id: "heng-xu-2026-07-15", citation: "Heng Xu, Yuhong Tan, Fudeng Huang, et al., Mol Plant. 2026 Jul 15", title: "The sugar-sensing kinase OSK3-mediated destabilization of OsbZIP58 promotes preharvest sprouting in rice under high temperature." },
        { id: "hui-lin-2026-04-08", citation: "Hui Lin, Fudan Chen, Guanyun Cheng, et al. Nature. 2026 Apr 8", title: "Asymmetric selection of a rice immune module and rebuild of disease resistance." },
        { id: "hongjiao-xu-2026-03-09", citation: "Hongjiao Xu, Xinyu Jiang, Fangrui Wang, et al. Nat Commun. 2026 Mar 9", title: "NPM3 functions as a lactyltransferase to promote necroptosis in male diabetic cardiomyopathy mice models via FASN transcription modulation." },
        { id: "ertao-wang-2026-01-30", citation: "Ertao Wang. J Mol Biol. 2026 Jan 30", title: "Deciphering Plant-Microbe Symbioses: A Molecular Blueprint for Precision Agriculture." },
        { id: "xianmiao-zhu-2025-12-04", citation: "Xianmiao Zhu, Xing Chen, Yangxuan Liu, et al., Science. 2025 Dec 4", title: "Cell wall patterning regulates plant stem cell dynamics." },
        { id: "mengshuang-li-2025-10-31", citation: "Mengshuang Li, Mengping Li, Shan Qi, et al. 2025 Oct 31", title: "Salicylic acid and ROS signaling modulate hypocotyl elongation in darkness via NPR1 and EX1." },
        { id: "hao-chen-xue-2025-08-18", citation: "Hao-Chen Xue, Zhou-Geng Xu, Yu-Jie Liu, et al. 2025 Aug 18", title: "A unified cell atlas of vascular plants reveals cell-type foundational genes and accelerates gene discovery." },
        { id: "chaocheng-guo-2025-03-17", citation: "Chaocheng Guo, Zhuoran Huang, Siyu Luo, et al., Plant Cell Environ. 2025 Mar 17", title: "Cell Fate Determination of the Potato Shoot Apex and Stolon Tips Revealed by Single-Cell Transcriptome Analysis." },
      ],
    },
    team: {
      title: "シーケンシング中核チーム",
      paragraphs: [
        "上海睿星生物技術有限公司のシーケンシング中核チームは、20年以上にわたる第二世代ゲノムシーケンシングの経験を有しています。特に植物学および微生物学の分野では、中国科学院分子植物科学卓越イノベーションセンターと長年にわたり協力し、これらの分野におけるシーケンシングとバイオインフォマティクス解析の豊富な経験を蓄積してきました。",
        "2つの主要なシーケンシングプラットフォームであるIlluminaとBGIにより、さまざまなお客様のニーズに対応できます。また、経験豊富なバイオインフォマティクス解析力を活かし、お客様一人ひとりに最適なシーケンシングサービスを提供できます。現在、当社では計画に沿って、一部の技術サービスの日本市場への展開を進めています。",
      ],
    },
  },
} as const satisfies GenomeSequencingContent;
