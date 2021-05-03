const { ccclass, property } = cc._decorator;
import * as protobuf from "protobufjs";
import cc_101Binder from "../../ui/cc_101/cc_101Binder";
import main_game from "../../ui/cc_101/main_game";

// import { QueueingSubject } from 'queueing-subject'
// import { Subscription } from 'rxjs'
// import { share, switchMap } from 'rxjs/operators'
// import makeWebSocketObservable, { GetWebSocketResponses, normalClosureMessage } from 'rxjs-websockets'

//import { webSocket, WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';


@ccclass
export default class GameRoot extends cc.Component {

    @property(cc.JsonAsset)
    public sysJson: cc.JsonAsset = null;

    private socketUrl:string = "ws://192.168.10.98 53001";

    private sub_bundle:cc.AssetManager.Bundle=null;
    private testload:number=0;
    onLoad() {
        //let sysProto = protobuf.Root.fromJSON(this.sysJson.json);
        //console.warn("sysProto : ", sysProto);
    }

    start() {
        let self = this;
        //cc.game.addPersistRootNode()
        cc.assetManager.loadBundle("http://localhost:8081/assets/cc_101", function (err, bundle) {
            fgui.UIPackage.loadPackage(bundle,"cc_101",function(err,pkg){
                cc_101Binder.bindAll();
                fgui.GRoot.create();
                let view = main_game.createInstance();
                view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
                view.addRelation(fgui.GRoot.inst, fgui.RelationType.Size);
                fgui.GRoot.inst.addChild(view);
                self.subgame();
            });
        });

        // cc.assetManager.loadBundle("http://localhost:8081/assets/cc_101", function (err, bundle) {
        //     bundle.loadDir("cc_101" ,function(err, assets) {
        //         console.warn("assets : ", assets);
        //         //都加载完毕后再调用addPackage
        //         //fgui.UIPackage.addPackage("cc_101"); 
        //         fgui.UIPackage.loadPackage(bundle,"cc_101",function(err,pkg){
        //             cc_101Binder.bindAll();
        //             fgui.GRoot.create();
        //             //下面就可以开始创建包里的界面了。
        //             let view = main_game.createInstance();
        //             view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
        //             view.addRelation(fgui.GRoot.inst, fgui.RelationType.Size);
        //             fgui.GRoot.inst.addChild(view);
        //             self.subgame();
        //         });
        //     });
        // });
        
        // cc.resources.loadDir("cc_101", function(err, assets) {
        //     console.warn("assets : ", assets);
        //     //都加载完毕后再调用addPackage
        //     fgui.UIPackage.addPackage("cc_101/cc_101"); 
        //     cc_101Binder.bindAll();
        //     fgui.GRoot.create();
        //     //下面就可以开始创建包里的界面了。
        //     let view = main_game.createInstance();
        //     view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
        //     view.addRelation(fgui.GRoot.inst, fgui.RelationType.Size);
        //     fgui.GRoot.inst.addChild(view);
        //     // self.connectGameServer();

        //     self.subgame();
        // });


        //let socketConfig:WebSocketSubjectConfig<ArrayBuffer> = {
        //    url: this.socketUrl
        //}
    }

    private subgame():void{
        let self = this;
        this.scheduleOnce(function() {
            console.log("chad");
            if( self.sub_bundle === null ){
                cc.assetManager.loadBundle('http://localhost:8081/assets/subgame3', function (err, bundle) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log('load bundle successfully.');
                    self.sub_bundle = bundle;
                    bundle.loadScene('gamesub', function (err, scene) {
                        cc.director.runScene(scene);
                    });
                });
            }else{
                ++this.testload;
                if( this.testload%2 === 0 ){
                    if( self.sub_bundle != null ){
                        self.sub_bundle.releaseAll();
                        self.sub_bundle = null;
                    }
                }
                else{
                    self.sub_bundle.loadScene('gamesub', function (err, scene) {
                        cc.director.runScene(scene);
                    });
                }
            }
        }, 2);
    }
}