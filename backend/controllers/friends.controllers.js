const User = require("../models/User");
const verifyId =require('mongoose').Types.ObjectId;

module.exports.allFriend = async(req,res)=>{
   
    res.status(200).json({message:"nothing"});
}
module.exports.oneFriend = async(req,res)=>{
    console.log(req);
    res.status(200).json({message:"nothing"});
}
module.exports.allFriendOnline = async(req,res)=>{
    console.log(req);
    res.status(200).json({message:"nothing"});
}

module.exports.addFriend = async(req,res)=>{
    //L'identifiant de la personne qui veut ajouter
    const idAdd = req.params.id;
    const idConfirm = req.body.confirm;   
    if (!verifyId.isValid(idAdd) || !verifyId.isValid(idConfirm)) {
        return res.status(500).json({err:"Id invalid"})
    }
    try {
        await User.findByIdAndUpdate(idAdd,{$addToSet:{invit:idConfirm}},{new:true,upsert:true}).catch((err)=>{
            return res.status(400).json({message:'Utilisateur introuvable'})
        })
        await User.findByIdAndUpdate(idConfirm,{$addToSet:{confirm:idAdd}},{new:true,upsert:true}).then((docs)=>{
            return res.status(200).json({message:'Utilisateur ajouté'})
        }).catch((err)=>{
            return res.status(500).json({message:'Utilisateur introuvable'})
        })
    } catch (error) {
        return res.status(500).json({error})
    }

}

module.exports.confirmFriend = async(req,res)=>{
    const idAdd = req.params.id;
    const idConfirm = req.body.confirm;  
    if (!verifyId.isValid(idAdd) || !verifyId.isValid(idConfirm)) {
        return res.status(500).json({err:"Id invalid"})
    }
    try {
        await User.findByIdAndUpdate(idAdd,{$pull:{invit:idConfirm},$addToSet:{friends:idConfirm}},{new:true,upsert:true}).catch((err)=>{
                return res.status(400).json({message:'Utilisateur introuvable'})
        })
        await User.findByIdAndUpdate(idConfirm,{$pull:{confirm:idAdd},$addToSet:{friends:idAdd}},{new:true,upsert:true}).then((data)=>{
            return res.status(200).json({message:"Utilisateur confirmé avec succes"})
        }).catch((e)=>{
            return res.status(400).json({message:'Utilisateur introuvable'})
        })
    
    } catch (error) {
        return res.status(400).json({error})
    }
}

module.exports.refuseConfirmFriend = async(req,res)=>{
    //Par default il d'agit de supprimer une invitation donc demande d'amitie
    // inverst = 0 =>'Supprimer l'invitation d'une personne'
    // inverst = 1 => 'Annuler l'invitation qu'on a envoyé à une personne
    const inverst = req.body.medo
    const idMe = (inverst == 1)? req.params.idMe:req.body.idFriend;
    const idFriend = (inverst == 1)? req.body.idFriend:req.params.idMe;  
    if (!verifyId.isValid(idMe) || !verifyId.isValid(idFriend)) {
        return res.status(500).json({err:"Id invalid"})
    }
    try {
        await User.findByIdAndUpdate(idMe,{$pull:{invit:idFriend}},{new:true,upsert:true}).catch((err)=>{
            return res.status(400).json({message:'Utilisateur introuvable'})
        })
        await User.findByIdAndUpdate(idFriend,{$pull:{confirm:idMe}},{new:true,upsert:true}).then((docs)=>{
            return res.status(200).json({message:"Demande d'invitation annulée avec succes"})
        }).catch((err)=>{          
            return res.status(400).json({message:'Utilisateur introuvable'})
        })
    
    } catch (error) {
        return res.status(400).json({error})
    }
    

}

module.exports.retirerFriend = async(req,res)=>{

    const idMe =req.params.idMe;
    const idFriend = req.body.idFriend;  
    if (!verifyId.isValid(idMe) || !verifyId.isValid(idFriend)) {
        return res.status(500).json({err:"Id invalid"})
    }
    try {
        await User.findByIdAndUpdate(idMe,{$pull:{friends:idFriend}},{new:true,upsert:true}).catch((err)=>{
            return res.status(400).json({message:'Utilisateur introuvable'})
        })
        await User.findByIdAndUpdate(idFriend,{$pull:{friends:idMe}},{new:true,upsert:true}).then((docs)=>{
            return res.status(200).json({message:"Utilisateur retiré des amis avec succes"})
        }).catch((err,data)=>{
            return res.status(400).json({message:'Utilisateur introuvable'})
        })
    
    } catch (error) {
        return res.status(400).json({error})
    }
    

}