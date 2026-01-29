// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a0008000404000000000000000004040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000103030303030303030201030303030303030302`, img`
2 2 2 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.swamp.swampTile4,sprites.swamp.swampTile5,sprites.swamp.swampTile7,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
