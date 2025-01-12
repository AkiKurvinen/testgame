const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.Sin,
		C3.Plugins.Sprite,
		C3.Behaviors.Physics,
		C3.Behaviors.DragnDrop,
		C3.Behaviors.Bullet,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{Sine: 0},
	{TiledBackground: 0},
	{Physics: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{DragDrop: 0},
	{Sprite3: 0},
	{Bullet: 0},
	{Sprite4: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {}
}