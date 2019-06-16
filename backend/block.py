import json
import pymongo
from flask import make_response, abort
from bson.objectid import ObjectId

data = pymongo.MongoClient("mongodb://hackathon:YQ7YPlNsI96nNI57@localhost:27017/")
blocks = list(data["hackathon"]["block"].find({},{"_id": 0, "blockdata": 0 }))

def read(blocknumber):
    if ({"blockid": blocknumber} in blocks):
        block = list(data["hackathon"]["block"].find({"blockid": blocknumber}))[0]["blockdata"]
        return {"blockname": block["blockname"], "blockborderpoints": block["blockborderpoints"] }
    else:
        abort(
            404, "block with number {blocknumber} not found".format(blocknumber=blocknumber)
        )


def read_object_types(blocknumber):
    if ({"blockid": blocknumber} in blocks):
        return sorted(list(data["hackathon"]["block"].find({"blockid": blocknumber}))[0]["blockdata"]["objects"].keys())
    else:
        abort(
            404, "block with number {blocknumber} not found".format(blocknumber=blocknumber)
        )

def read_object(blocknumber, blockobjecttype):
    if blockobjecttype in sorted(list(data["hackathon"]["block"].find({"blockid": blocknumber}))[0]["blockdata"]["objects"].keys()):
        return list(data["hackathon"]["block"].find({"blockid": blocknumber}))[0]["blockdata"]["objects"][blockobjecttype]
    else:
        abort(
            404, "block object with type {blockobjecttype} not found".format(blockobjecttype=blockobjecttype)
        )

def read_emergencies(blocknumber):
    if ({"blockid": blocknumber} in blocks):
        return list(data["hackathon"]["block"].find({"blockid": blocknumber}))[0]["blockdata"]["emergencies"]
    else:
        abort(
            404, "block with number {blocknumber} not found".format(blocknumber=blocknumber)
        )

def read_generations(blocknumber):
    if blocknumber in blocks:
        return list(data["hackathon"]["block"].find({"blockid": blocknumber}))[0]["blockdata"]["generations"]
    else:
        abort(
            404, "block with number {blocknumber} not found".format(blocknumber=blocknumber)
        )

def read_people(blocknumber, sex, generation):
    sexes = list(list(data["hackathon"]["block"].find({"blockid": "0"}))[0]["blockdata"]["people"].keys())
    generations = list(list(data["hackathon"]["block"].find({"blockid": "0"}))[0]["blockdata"]["people"]["m"].keys())
    if ({"blockid": blocknumber} in blocks) and (sex in sexes) and (generation in generations):
        return list(data["hackathon"]["block"].find({"blockid": blocknumber}))[0]["blockdata"]["people"][sex][generation]
    else:
        abort(
            404, "block/sex/generation not found"
        )

def read_people_sex(blocknumber, sex):
    sexes = list(list(data["hackathon"]["block"].find({"blockid": "0"}))[0]["blockdata"]["people"].keys())
    if ({"blockid": blocknumber} in blocks) and (sex in sexes):
        return list(data["hackathon"]["block"].find({"blockid": blocknumber}))[0]["blockdata"]["people"][sex]
    else:
        abort(
            404, "block/sex not found"
        )

