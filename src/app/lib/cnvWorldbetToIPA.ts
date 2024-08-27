export class Worldbet {
    private static readonly PSTYPE_IPA = 0;
    private static readonly PSTYPE_JONES = 1;

    private static readonly SYMBOLS_CHARMAP: { [key: string]: [string, string] } = {
        'i': ['i', 'i:'],
        'I': ['ɪ', 'i'],
        'e': ['e', 'e'],
        'E': ['ɛ', 'e'],
        '@': ['æ', 'æ'],
        'a': ['a', 'a'],
        'ix': ['ɨ', 'i'],
        '&': ['ə', 'ə'],
        '3r': ['ɝ', 'ə:'],
        'u': ['u', 'u:'],
        'U': ['ʊ', 'u'],
        'o': ['o', 'o'],
        '^': ['ʌ', 'ʌ'],
        '>': ['ɔ', 'ɔ'],
        'A': ['ɑ', 'ɑ'],
        'eI': ['eɪ', 'eɪ'],
        'aI': ['aɪ', 'aɪ'],
        '>I': ['ɔɪ', 'ɔɪ'],
        'aU': ['aʊ', 'aʊ'],
        'oU': ['oʊ', 'oʊ'],
        'p': ['p', 'p'],
        'p_h': ['p', 'p'],
        'p_c': ['p', 'p'],
        'b': ['b', 'b'],
        'b_c': ['b', 'b'],
        't': ['t', 't'],
        't_h': ['t', 't'],
        't_c': ['t', 't'],
        'd': ['d', 'd'],
        'd_c': ['d', 'd'],
        'k': ['k', 'k'],
        'k_h': ['k', 'k'],
        'k_c': ['k', 'k'],
        'g': ['g', 'g'],
        'g_c': ['g', 'g'],
        'f': ['f', 'f'],
        'v': ['v', 'v'],
        'T': ['θ', 'θ'],
        'D': ['ð', 'ð'],
        's': ['s', 's'],
        'z': ['z', 'z'],
        'S': ['ʃ', 'ʃ'],
        'Z': ['ʒ', 'ʒ'],
        'h': ['h', 'h'],
        'h_v': ['h', 'h'],
        'hw': ['h', 'h'],
        'tS': ['ʧ', 'ʧ'],
        'dZ': ['ʤ', 'ʤ'],
        'm': ['m', 'm'],
        'n': ['n', 'n'],
        'ng': ['ŋ', 'ŋ'],
        'l': ['l', 'l'],
        'l_0': ['l', 'l'],
        '9': ['ɹ', 'r'],
        '9_0': ['ɹ', 'ɹ'],
        'j': ['j', 'j'],
        'j_0': ['j', 'j'],
        'w': ['w', 'w'],
        'w_0': ['w', 'w'],
        'm=': ['m', 'm'],
        'n=': ['n', 'n'],
        'l=': ['l', 'l'],
        '9=': ['ɹ', 'ɹ'],
        't_(': ['t', 't'],
        'n_(': ['n', 'n'],
        '4': ['ɯ', 'ɯ'],
        '4:': ['ɯː', 'ɯː'],
        '4_0': ['ɯ', 'ɯ'],
        '4:~': ['ɯː', 'ɯː'],
        'e:': ['eː', 'eː'],
        'e:~': ['ẽː', 'ẽː'],
        'a:': ['aː', 'aː'],
        'a~': ['ã', 'ã'],
        'i:': ['iː', 'iː'],
        'i_0': ['i', 'i'],
        'i~': ['i', 'i'],
        'i:~': ['iː', 'iː'],
        'o:': ['oː', 'oː'],
        'o~': ['õ', 'õ'],
        'o:~': ['õː', 'õː'],
        'g-j': ['g', 'g'],
        'F': ['ɸ', 'f'],
        'V': ['v', 'v'],
        'G': ['ɣ', 'ɣ'],
        'dz': ['ʣ', 'ʣ'],
        'ts': ['ʦ', 'ʦ'],
        's-h': ['s', 's'],
        'S-h': ['ʃ', 'ʃ'],
        'ts-h': ['ʦ', 'ʦ'],
        'tS-h': ['ʧ', 'ʧ'],
        'm-j': ['m', 'm'],
        'nj': ['ɲ', 'ɲ'],
        'Nq': ['ɴ', 'ɴ'],
        'r(': ['ɾr', 'ɾr'],
    };

    public static cnvWorldbetToIPA(worldbetArray: string[]): string[] {
        if (worldbetArray.length < 1) {
            return [];
        }
    
        return worldbetArray.map(worldbet => {
            if (worldbet in this.SYMBOLS_CHARMAP) {
            return this.SYMBOLS_CHARMAP[worldbet][this.PSTYPE_IPA];
            } else {
            return worldbet === "" ? "" : worldbet;
            }
        });
        }
    }
    
    // 使用例
    // const worldbetArray = ['i', 'i', 'i'];
    // const ipaArray = Worldbet.cnvWorldbetToIPA(worldbetArray);
    // console.log(ipaArray);  // 出力: ['i', 'i', 'i']