interface MergeType1 {
  attr1: string;
  attr2: boolean;
}
let mergeVar: MergeType1 = { attr1: "", attr2: false };

interface MergeType2 {
  attr3: number;
}

let mergeVar1: MergeType1 & MergeType2 = { attr1: "", attr2: false };
let mergeVar2: MergeType1 & MergeType2 = { attr3: 0 };
let mergeVar3: MergeType1 & MergeType2 = { attr3: 0, attr1: "", attr2: false };
let mergeVar4: MergeType1 & { attr?: number } = { attr1: "", attr2: false };
