from flask import make_response, abort
import json

def get_data(datafile):
    with open(datafile, 'r') as jsondata:
        return json.load(jsondata)

BLOCKS = get_data('block.json')

def read(blocknumber):
    if blocknumber in BLOCKS:
        return {"blockname": BLOCKS.get(blocknumber)["blockname"], "blockborderpoints": BLOCKS.get(blocknumber)["blockborderpoints"] }
    else:
        abort(
            404, "block with number {blocknumber} not found".format(blocknumber=blocknumber)
        )

    return block

def read_object_types(blocknumber):
    if blocknumber in BLOCKS:
        return sorted(BLOCKS.get(blocknumber)["objects"].keys())
    else:
        abort(
            404, "block with number {blocknumber} not found".format(blocknumber=blocknumber)
        )

def read_object(blocknumber, blockobjecttype):
    if blockobjecttype in sorted(BLOCKS.get(blocknumber)["objects"].keys()):
        return BLOCKS.get(blocknumber)["objects"][blockobjecttype]
    else:
        abort(
            404, "block object with type {blockobjecttype} not found".format(blockobjecttype=blockobjecttype)
        )

def read_emergencies(blocknumber):
    if blocknumber in BLOCKS:
        return BLOCKS.get(blocknumber)["emergencies"]
    else:
        abort(
            404, "block with number {blocknumber} not found".format(blocknumber=blocknumber)
        )

def read_generations(blocknumber):
    if blocknumber in BLOCKS:
        return BLOCKS.get(blocknumber)["generations"]
    else:
        abort(
            404, "block with number {blocknumber} not found".format(blocknumber=blocknumber)
        )

def read_people(blocknumber, sex, generation):
    if (blocknumber in BLOCKS) and (sex in sorted(BLOCKS.get(blocknumber)["people"].keys())) and (generation in sorted(BLOCKS.get(blocknumber)["people"][sex].keys())):
        return BLOCKS.get(blocknumber)["people"][sex][generation]
    else:
        abort(
            404, "block/sex/generation not found"
        )

def read_people_sex(blocknumber, sex):
    if (blocknumber in BLOCKS) and (sex in sorted(BLOCKS.get(blocknumber)["people"].keys())):
        return BLOCKS.get(blocknumber)["people"][sex]
    else:
        abort(
            404, "block/sex/generation not found"
        )

