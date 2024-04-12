window.SIDEBAR_ITEMS = {"enum":[["Descriptor","Script descriptor"],["DescriptorPublicKey","The descriptor pubkey, either a single pubkey or an xpub."],["Legacy","Legacy ScriptContext To be used as P2SH scripts For creation of Bare scriptpubkeys, construct the Miniscript under `Bare` ScriptContext"],["Segwitv0","Segwitv0 ScriptContext"]],"mod":[["checksum","Descriptor checksum"],["error","Descriptor errors"],["policy","Descriptor policy"],["template","Descriptor templates"]],"struct":[["Miniscript","The top-level miniscript abstract syntax tree (AST)."]],"trait":[["ExtractPolicy","Trait implemented on [`Descriptor`]s to add a method to extract the spending [`policy`]"],["IntoWalletDescriptor","Trait for types which can be converted into an [`ExtendedDescriptor`] and a [`KeyMap`] usable by a wallet in a specific [`Network`]"],["ScriptContext","The ScriptContext for Miniscript. Additional type information associated with miniscript that is used for carrying out checks that dependent on the context under which the script is used. For example, disallowing uncompressed keys in Segwit context"]],"type":[["DerivedDescriptor","Alias for a [`Descriptor`] that contains extended derived keys"],["ExtendedDescriptor","Alias for a [`Descriptor`] that can contain extended keys using [`DescriptorPublicKey`]"],["HdKeyPaths","Alias for the type of maps that represent derivation paths in a `psbt::Input` or `psbt::Output`"],["TapKeyOrigins","Alias for the type of maps that represent taproot key origins in a `psbt::Input` or `psbt::Output`"]]};