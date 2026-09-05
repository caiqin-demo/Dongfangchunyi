import type { GenomeSequencingContent } from "@/content/genome-sequencing/types";

export const zhGenomeSequencingContent = {
  metadata: {
    title: "基因组测序 | 东方纯一",
    description: "专注于动植物和微生物领域的二代/三代基因组及转录组测序相关服务",
  },
  title: "基因组测序",
  intro: "专注于动植物和微生物领域的二代/三代基因组及转录组测序相关服务",
  optionGroupLabel: "测序选项",
  options: [
    { id: "plant-and-cell", label: "植物及细胞" },
    { id: "animal-and-cell", label: "动物及细胞" },
    { id: "microorganism", label: "微生物" },
    { id: "multidimensional-analysis-platform", label: "多维度解析平台" },
  ],
  body: {
    technicalRouteLabel: "技术路线+",
    contact: {
      label: "咨询请联系：",
      emails: ["market@easternpurity.com", "info@shanghaigenomics.com"],
    },
    categories: [
      {
        id: "plant-and-cell",
        label: "植物及细胞",
        items: [
          { id: "single-cell-sequencing", label: "单细胞测序" },
          { id: "genome-de-novo-sequencing", label: "基因组de novo测序" },
          { id: "absolute-quantification-microbial-diversity-sequencing", label: "绝对定量微生物多样性测序" },
          { id: "dap-seq-technical-service", label: "DAP-seq技术服务" },
          { id: "genome-resequencing", label: "基因组重测序" },
        ],
      },
      {
        id: "animal-and-cell",
        label: "动物及细胞",
        items: [
          { id: "single-cell-sequencing", label: "单细胞测序" },
          { id: "genome-de-novo-sequencing", label: "基因组de novo测序" },
          { id: "absolute-quantification-microbial-diversity-sequencing", label: "绝对定量微生物多样性测序" },
          { id: "dap-seq-technical-service", label: "DAP-seq技术服务" },
          { id: "whole-transcriptome-sequencing", label: "全转录组组测序" },
        ],
      },
      {
        id: "microorganism",
        label: "微生物",
        items: [
          { id: "single-cell-sequencing", label: "单细胞测序" },
          { id: "genome-de-novo-sequencing", label: "基因组de novo测序" },
          { id: "absolute-quantification-microbial-diversity-sequencing", label: "绝对定量微生物多样性测序" },
          { id: "dap-seq-technical-service", label: "DAP-seq技术服务" },
          { id: "marine-microbiology-research", label: "海洋微生物研究" },
        ],
      },
      {
        id: "multidimensional-analysis-platform",
        label: "多维度解析平台",
        items: [
          { id: "epigenetics-service", label: "表观遗传学服务" },
          { id: "mrna-in-situ-hybridization", label: "mRNA原位杂交" },
          { id: "yeast-two-hybrid", label: "酵母双杂交" },
          { id: "spr-molecular-interaction-research", label: "SPR分子互作研究技术" },
          { id: "proteomics-and-metabolomics", label: "蛋白质组学&代谢组学" },
          { id: "multiomics-combined-analysis", label: "多组学联合分析" },
        ],
      },
    ],
    publications: {
      title: "客户发表的文章",
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
      title: "核心服务团队",
      paragraphs: [
        "上海睿星生物技术有限公司测序核心团队有着20多年的二代基因组测序经验。尤其在植物学和微生物学领域，公司和中国科学院分子植物科学卓越创新中心有着多年的合作，积累了丰富的领域测序和生信分析经验。",
        "二大测序平台Illumina和BGI可以满足不同类型客户需求，同时在经验丰富的生信分析力量的辅助下，能提供给每一位客户最优的测序服务。目前，公司正按计划让部分技术服务落地日本市场。",
      ],
    },
  },
} as const satisfies GenomeSequencingContent;
